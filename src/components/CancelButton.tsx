interface CancelButtonProps {
  onClick: () => void;
}

export function CancelButton({ onClick }: CancelButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded-md transition-colors ml-4"
    >
      Cancel
    </button>
  );
}
