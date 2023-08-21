type classNameItem = string | null | undefined;

export const cn = function (...list: classNameItem[]): string {
    return list.filter((className: classNameItem) => !!className).join(' ');
};