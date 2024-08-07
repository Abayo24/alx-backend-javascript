/* eslint-disable linebreak-style */
export default function loadBalancer(chinaDownload, USDownload) {
  return Promise.any([chinaDownload, USDownload]);
}
