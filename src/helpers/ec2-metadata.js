import axios from 'axios';

let instanceData = {}

instanceData.getInstanceId = async () => {
    const {data} = await axios.get('http://169.254.169.254/latest/meta-data/instance-id')
    return data
}

instanceData.getInstanceType = async () => {
    const {data} = await axios.get('http://169.254.169.254/latest/meta-data/instance-type')
    return data
}

instanceData.getInstancePublicName = async () => {
    const {data} = await axios.get('http://169.254.169.254/latest/meta-data/public-hostname')
    return data
}

instanceData.getInstancePublicIp = async () => {
    const {data} = await axios.get('http://169.254.169.254/latest/meta-data/public-ipv4')
    return data
}

export default instanceData;