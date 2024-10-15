import { Select, Option } from './SortSelector.styles';

interface SelectorProps {
  options: Array<any>;
  value: any;
  onChange: (selectedOption: any) => void;
}

export const Selector = ({ options, value, onChange }: SelectorProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value);
  };

  return (
    <Select value={value} onChange={handleChange}>
      <Option value="">Select an option</Option>
      {options.map((option, index) => (
        <Option key={index} value={option}>
          {option}
        </Option>
      ))}
    </Select>
  );
};
