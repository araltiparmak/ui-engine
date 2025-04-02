export const Result = ({ webhookId }: { webhookId: string }) => {
  return (
    <a
      href={`https://webhook.site/#!/view/${webhookId}`}
      target="_blank"
      className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
    >
      Check result
    </a>
  );
};
