import { DirectLine } from 'botframework-directlinejs';

export default function ({conversationId, domain, fetch, secret, token, webSocket}) {
  return new DirectLine({
    conversationId,
    domain,
    fetch,
    secret,
    token,
    webSocket,
    createFormData: attachments => {
      const formData = new FormData();

      attachments.forEach(({ contentType, data, filename, name }) => {
        formData.append(name, new Blob(data, { contentType }), filename);
      });

      return formData;
    }
  });
}
