// A function named loadBalancer
// It Accepts two arguments: chinaDownload (Promise)
// and USDownload (Promise).

export default function loadBalancer(chinaDownload, USDownload) {
  return Promise.race([chinaDownload, USDownload]);
}
