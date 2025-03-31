interface SubmitButtonProps {
  onClick?: () => void;
}

export function SubmitButton({ onClick }: SubmitButtonProps) {
  return (
    <button
      type="submit"
      onClick={onClick}
      className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md transition-colors"
    >
      Submit
    </button>
  );
}
