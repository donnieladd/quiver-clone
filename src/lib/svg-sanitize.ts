const SVG_OPEN = /<svg[\s\S]*?>/i;
const SVG_CLOSE = /<\/svg>/i;

export function extractSvg(text: string): string | null {
  const fenced = text.match(/```(?:svg|xml)?\s*([\s\S]*?)```/i);
  const candidate = fenced?.[1]?.trim() ?? text.trim();
  const start = candidate.search(SVG_OPEN);
  const end = candidate.search(SVG_CLOSE);
  if (start === -1 || end === -1) return null;

  const svg = candidate.slice(start, end + 6);
  if (!SVG_OPEN.test(svg)) return null;
  return normalizeSvg(svg);
}

function normalizeSvg(svg: string): string {
  let result = svg.trim();
  if (!/xmlns=/i.test(result)) {
    result = result.replace(
      /<svg/i,
      '<svg xmlns="http://www.w3.org/2000/svg"',
    );
  }
  if (!/viewBox=/i.test(result) && /width="(\d+)"/i.test(result)) {
    const width = result.match(/width="(\d+)"/i)?.[1] ?? "512";
    const height = result.match(/height="(\d+)"/i)?.[1] ?? width;
    result = result.replace(
      /<svg/i,
      `<svg viewBox="0 0 ${width} ${height}"`,
    );
  }
  return result;
}

export function isValidSvg(svg: string): boolean {
  return SVG_OPEN.test(svg) && SVG_CLOSE.test(svg);
}
