import axios from 'axios'

const instanceData = {}

instanceData.getInstanceId = async () => {
  // nosemgrep: typescript.react.security.react-insecure-request.react-insecure-request
  const { data } = await axios.get('http://169.254.169.254/latest/meta-data/instance-id')
  return data
}

instanceData.getInstanceType = async () => {
  // nosemgrep: typescript.react.security.react-insecure-request.react-insecure-request
  const { data } = await axios.get('http://169.254.169.254/latest/meta-data/instance-type')
  return data
}

instanceData.getInstancePublicName = async () => {
  // nosemgrep: typescript.react.security.react-insecure-request.react-insecure-request
  const { data } = await axios.get('http://169.254.169.254/latest/meta-data/public-hostname')
  return data
}

instanceData.getInstancePublicIp = async () => {
  // nosemgrep: typescript.react.security.react-insecure-request.react-insecure-request
  const { data } = await axios.get('http://169.254.169.254/latest/meta-data/public-ipv4')
  return data
}

export default instanceData
