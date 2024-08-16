async function fetchGlobalData() {
    const strapiUrl = 'http://localhost:1337';
    const endpoint = '/api/global';
    const strapiToken = 'b6f18997075402f6472ad35219e2190e716fa284c1fc6ed0ca53a8a0ffdbfb4be38d6ccc4d36aa0e84240fac7fec8b766a5c608c0ba57f46c136d4a8f7cef6aaf761c333d07654c5f49757f470ba30c3ad06f5b32738aa79947984dd2102d0d5aeee6b23c5a6a3d34bce9e4f607f3f9e042444a85e01bc7bb0629bd7491fe932';
  
    try {
      const response = await fetch(`${strapiUrl}${endpoint}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${strapiToken}`
        }
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
      console.log('Fetched global data:', data);
      return data;
    } catch (error) {
      console.error('Error fetching global data:', error);
      throw error;
    }
  }
  
  // Usage
  fetchGlobalData()
    .then(data => {
      // Handle the data
      console.log('Global data:', data);
    })
    .catch(error => {
      // Handle any errors
      console.error('Failed to fetch global data:', error);
    });