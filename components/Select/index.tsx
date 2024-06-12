import { Select as UISelect, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

export type SelectProps = {};

export const Select = (props: SelectProps) => {
  const {...rest} = props;

  return (
    <UISelect value="clothing">
      <SelectTrigger id="category" aria-label="Select category">
        <SelectValue placeholder="请选择" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="clothing">舞会</SelectItem>
        <SelectItem value="electronics" disabled>
          酒水
        </SelectItem>
        <SelectItem value="course" disabled>
          课程
        </SelectItem>
      </SelectContent>
    </UISelect>
  );
};
