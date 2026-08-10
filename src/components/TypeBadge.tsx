import { typeColor } from "../utils/Colors";

interface Props {
  type: string;
}

export function TypeBadge({ type }: Props) {
  return (
    <span
      className={`rounded-full px-3 py-1 text-xs font-semibold capitalize text-white ${typeColor(type)}`}
    >
      {type}
    </span>
  );
}
