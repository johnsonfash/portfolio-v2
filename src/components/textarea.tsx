import { ComponentProps } from "react";

const TextArea = ({ invalid, ...rest }: { invalid?: boolean | string } & ComponentProps<'textarea'>) => {

  return <textarea
    {...rest}
    className={`
    ${rest?.className ? rest?.className : ''}
    w-full pr-10 focus:outline-1  focus:outline-black ring-slate-300 appearance-none
    ${invalid ? 'ring-red-200 border-red-700 ring-offset-1 ring-2' : ''}
    ${rest?.disabled ? 'bg-slate-100' : ''}
    focus:ring-2 border-2 py-2 px-3 rounded-md
    `}
    placeholder={rest?.placeholder} />
};

export default TextArea;
