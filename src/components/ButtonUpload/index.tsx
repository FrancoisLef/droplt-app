import { Button, ButtonProps } from '@chakra-ui/react';
import { ChangeEvent, useRef, useState } from 'react';

import { FILE_TYPE } from '../../helpers/file';

interface ButtonUploadProps extends ButtonProps {
  // onUploadSuccess: () => void,
}

const ButtonUpload: React.FC<ButtonUploadProps> = ({ children, ...props }) => {
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const onClick = () => {
    inputRef.current?.click();
  };

  const onChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;
    if (!files) {
      return;
    }
    setIsLoading(true);

    const body = new FormData();

    Array.from(files).forEach((file, i) => {
      body.append('torrents', file);
    });

    const res = await fetch('/upload', {
      method: 'POST',
      body,
    })
      .then((res) => res.json())
      .catch(() => {});

    console.log(res);

    // reset input file value
    event.target.value = '';
    setIsLoading(false);
  };

  return (
    <>
      <input
        multiple
        accept={FILE_TYPE.TORRENT}
        ref={inputRef}
        onChange={onChange}
        type="file"
        style={{ display: 'none' }}
      />
      <Button isLoading={isLoading} onClick={onClick} {...props}>
        {children}
      </Button>
    </>
  );
};

export default ButtonUpload;
