
const {ethers} = require("hardhat");


const main = async () => {

  const contractFactory = await ethers.getContractFactory("Inbox");
  const contract =await contractFactory.deploy('Welcome');
  await contract.deployed();
  console.log("Contract deployed at: ", contract.address);
  // save the address for later use in frontend

}


const runMain = async () => {
  try{
    await main();
    process.exit(0);
  }catch(e){
    console.log(e);
    process.exit(1);
  }
}


runMain();


