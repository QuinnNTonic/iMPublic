#install node & npm
sudo apt-get install -y curl
curl -fsSL https://deb.nodesource.com/setup_22.x -o nodesource_setup.sh
sudo -E bash nodesource_setup.sh
sudo apt-get install -y nodejs
node -v

BASEDIR=$(dirname $0)
echo "Script location: ${BASEDIR}"
npm ci
npm run deploy:test
