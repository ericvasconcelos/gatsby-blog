/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it
import './src/styles/global.scss';

export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    `This application has been updated. ` +
      `Reload to display the latest version?`,
  );
  if (answer === true) {
    window.location.reload();
  }
};

export const shouldUpdateScroll = () => {
  window.scrollTo(0, 0);
  return false;
};
