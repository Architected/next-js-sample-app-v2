import {
  FormFieldRow,
  OnClickButton,
  SubmitButton,
} from '../shared/formFields';
import { AttributeRow } from './fileLayout';
import { useForm } from 'react-hook-form';

export const IpfsContentView = () => {
  return <div>Please create IPFS assets on the previous tab to continue.</div>;
};

export const CreateTokenView = ({ file, previewToken }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  return (
    <div>
      <div className="flex flex-col sm:flex-row mb-4">
        <div className="text-sm font-bold w-64 ">
          Create a NFT Token for this file
        </div>
      </div>
      <form onSubmit={handleSubmit(previewToken)} autoComplete="off">
        <AttributeRow labelName="Title" value={file.name} />
        <AttributeRow labelName="Description" value={file.description} />
        <FormFieldRow
          id="price"
          title="Token Price (MATIC)"
          register={register}
          errors={errors}
          config={{
            required: 'Please enter a price',
          }}
        />

        <SubmitButton title="Next" />
      </form>
    </div>
  );
};

export const NftTokenView = () => {
  return <div>Token Ready For minting.</div>;
};

export const MintTokenView = ({
  file,
  mintToken,
  isUpdatingFile,
  updatingError,
}) => {
  return (
    <div>
      <div className="flex flex-col sm:flex-row mb-4">
        <div className="text-sm font-bold w-64 ">Mint NFT Token</div>
      </div>
      <AttributeRow labelName="Title" value={file.name} />
      <AttributeRow labelName="Description" value={file.description} />
      <AttributeRow labelName="Token Price (MATIC)" value={file.tokenPrice} />
      <OnClickButton
        title="Mint Token"
        isLoading={isUpdatingFile}
        errorMessage={updatingError}
        onClickHandler={mintToken}
      />
    </div>
  );
};
