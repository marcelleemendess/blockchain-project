const main = async () => {
    //Esse trecho compilará nosso contrato e gerará os arquivos necessários que precisamos para trabalhar com nosso contrato no diretório artifacts.
    const waveContractFactory = await hre.ethers.getContractFactory("WavePortal");

    const waveContract = await waveContractFactory.deploy();
    await waveContract.deployed();
    console.log("Contract deployed to:", waveContract.address);
  };
  
  const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };
  
  runMain();

  //Hardhat criará uma rede Ethereum local, mas apenas para este contrato. Então, depois que o script for concluído, ele destruirá essa rede local