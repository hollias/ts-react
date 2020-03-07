import * as React from 'react';

const wordRelay = () => {
  const [word, setWord] = React.useState('이남수');
  const [value, setValue] = React.useState('');
  const [result, setResult] = React.useState('');

  const inputEl = React.useRef<HTMLInputElement>(null);

  const onSubmitForm = React.useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const input = inputEl.current;

    if (word[word.length - 1] === value[0]) {
      setResult('딩동댕');
      setWord(value);
      setValue('');
      if (input) {
        input.focus();
      }
    } else {
      setResult('땡');
      setValue('');
      if (input) {
        input.focus();
      }
    }
  }, [word, value]);
  const onChange = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  }, []);

  return (
    <>
      <div>{word}</div>
      <form onSubmit={onSubmitForm}>
        <input
          ref={inputEl}
          value={value}
          onChange={onChange}
        />
        <button>입력!</button>
      </form>
      <div>{result}</div>
    </>
  )
}

export default wordRelay;