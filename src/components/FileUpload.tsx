import { ChangeEvent, useRef, useState } from 'react';
import { FiFile } from 'react-icons/fi';
import { useClient } from 'react-supabase';
import { FormControl, FormLabel, Icon, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';

export type FileUploadProps = {
  name: string;
  placeholder?: string;
  acceptedFileTypes?: string;
  label: string;
  handleChange: (e: ChangeEvent<HTMLSelectElement | HTMLInputElement>) => void;
};

export const FileUpload = ({ name, placeholder = 'Twój plik...', acceptedFileTypes, label, onChange }: any) => {
  const supaBase = useClient();
  const [value, setValue] = useState('');
  const inputRef = useRef();

  const handleClick = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e?.target?.files?.[0] as File;

    try {
      const { data: dataStorage, error } = await supaBase.storage
        .from('images')
        .upload(`img_${name}_${Date.now()}`, file);

      if (error || !dataStorage) throw error;

      const path = dataStorage.Key.replace('images/', '');

      console.log('🚀 ~ file: FileUpload.tsx ~ line 32 ~ handleClick ~ path', path);

      const { data, error: ex } = await supaBase.storage.from('images').getPublicUrl(path);

      console.log(data);

      if (ex || !data) throw ex;

      setValue(file.name);
      onChange({ target: { name, value: data.publicURL } });
    } catch (ex) {
      alert(ex.message ?? 'Nie udało się przesłać pliku');
    }
  };

  return (
    <FormControl>
      <FormLabel htmlFor="writeUpFile">{label}</FormLabel>
      <InputGroup onClick={() => inputRef.current?.click()}>
        <InputLeftElement pointerEvents="none" children={<Icon as={FiFile} />} />
        <input
          onChange={handleClick}
          type="file"
          accept={acceptedFileTypes}
          name={name}
          ref={inputRef as any}
          style={{ display: 'none' }}
        />
        <Input value={value} type="text" cursor="pointer" placeholder={placeholder} />
      </InputGroup>
    </FormControl>
  );
};
