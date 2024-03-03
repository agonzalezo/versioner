import axios from 'axios';

let instanceData = {}

instanceData.getInstanceId = async () => {
    const result = await axios.get('http://169.254.169.254/latest/meta-data/instance-id')
    return result.data
}

instanceData.getInstanceType = async () => {
    const result = await axios.get('http://169.254.169.254/latest/meta-data/instance-type')
    return result.data
}

instanceData.getInstancePublicName = async () => {
    const result = await axios.get('http://169.254.169.254/latest/meta-data/public-hostname')
    return result.data
}

instanceData.getInstancePublicIp = async () => {
    const result = await axios.get('http://169.254.169.254/latest/meta-data/public-ipv4')
    return result.data
}

export default instanceData;