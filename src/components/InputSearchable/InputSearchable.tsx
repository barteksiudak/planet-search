import { useCallback, useEffect, useState } from 'react';
import { AxiosResponse } from 'axios';
import { InfoStyled, InputStyled, ContainerStyled } from './Styles';
import { useDebounce } from '../../hooks';

interface IInputSearchable<T> {
  onResponse: (result: T[]) => void;
  query: (phrase: string) => Promise<AxiosResponse<{ results: T[] }>>;
  placeholder?: string;
}

export default function InputSearchable<T>({
  onResponse,
  query,
  placeholder = 'Search string',
}: IInputSearchable<T>) {
  const [value, setValue] = useState<string>('');
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const debounceValue = useDebounce(value);

  const handleResponse = useCallback(
    ({ results }: { results: T[] }) => {
      onResponse(results);
    },
    [onResponse]
  );

  const handleInputChange = useCallback(
    ({
      target: { value: inputValue },
    }: React.ChangeEvent<HTMLInputElement>) => {
      setValue(inputValue);
    },
    []
  );

  const clear = useCallback(() => {
    handleResponse({ results: [] });
    setValue('');
  }, [handleResponse]);

  useEffect(() => {
    if (!debounceValue) {
      clear();
      return;
    }

    setIsSearching(true);

    query(debounceValue)
      .then(({ data }) => {
        handleResponse(data);
      })
      .finally(() => {
        setIsSearching(false);
      });
  }, [clear, debounceValue, handleResponse, query]);

  return (
    <ContainerStyled>
      <InputStyled
        type="text"
        onChange={handleInputChange}
        value={value}
        placeholder={placeholder}
      />
      <InfoStyled>{isSearching && 'Searching ...'}</InfoStyled>
    </ContainerStyled>
  );
}
