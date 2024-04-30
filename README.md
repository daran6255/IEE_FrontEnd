## Installation

### New Setup

Clone IEE Frontend

```
git clone https://github.com/daran6255/IEE_Frontend.git
cd IEE_Frontend
nano .env
```

Add the following to `.env` file

```
PUBLIC_URL=""

REACT_APP_API_URL="http://127.0.0.1:5000"
```

Run the setup

```
chmod +x setup.sh
sudo -E ./setup.sh
```

Restart pm2 service after app updates

`sudo -E pm2 restart iee-frontend`
