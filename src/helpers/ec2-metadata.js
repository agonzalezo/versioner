import axios from 'axios'

const instanceData = {}

// nosemgrep: typescript.react.security.react-insecure-request.react-insecure-request
instanceData.getInstanceId = async () => {
  const { data } = await axios.get('http://169.254.169.254/latest/meta-data/instance-id')
  return data
}

// nosemgrep: typescript.react.security.react-insecure-request.react-insecure-request
instanceData.getInstanceType = async () => {
  const { data } = await axios.get('http://169.254.169.254/latest/meta-data/instance-type')
  return data
}

// nosemgrep: typescript.react.security.react-insecure-request.react-insecure-request
instanceData.getInstancePublicName = async () => {
  const { data } = await axios.get('http://169.254.169.254/latest/meta-data/public-hostname')
  return data
}

// nosemgrep: typescript.react.security.react-insecure-request.react-insecure-request
instanceData.getInstancePublicIp = async () => {
  const { data } = await axios.get('http://169.254.169.254/latest/meta-data/public-ipv4')
  return data
}

export default instanceData
