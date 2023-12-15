import React from "react";
import { useAccount } from "wagmi";
import {
  useConnectModal,
  useAccountModal,
  useChainModal,
} from '@rainbow-me/rainbowkit';
import { useContractRead } from 'wagmi'
import { erc20ABI } from "wagmi";
import { formatEther, maxInt104, parseEther } from "viem";
import { useContractWrite } from 'wagmi'



const Form = ({setAmount, amount}) => {
  const { address, isConnected } = useAccount()
  const { openConnectModal } = useConnectModal();


  let abi = [{"inputs":[{"internalType":"address","name":"_token","type":"address"},{"internalType":"address","name":"_feeAddress","type":"address"},{"internalType":"uint256","name":"_stakingTaxRate","type":"uint256"},{"internalType":"uint256","name":"_unstakingTaxRate","type":"uint256"},{"internalType":"uint256","name":"_dailyROI","type":"uint256"},{"internalType":"uint256","name":"_stakeTime","type":"uint256"},{"internalType":"uint256","name":"_minimumStakeValue","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"stakeholder","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"totalTax","type":"uint256"},{"indexed":false,"internalType":"address","name":"_referrer","type":"address"}],"name":"OnRegisterAndStake","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"tax","type":"uint256"}],"name":"OnStake","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"tax","type":"uint256"}],"name":"OnUnstake","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"OnWithdrawal","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_from","type":"address"},{"indexed":true,"internalType":"address","name":"_to","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[],"name":"active","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"addStake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_stakeholder","type":"address"}],"name":"calculateEarnings","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"changeActiveStatus","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_unstaker","type":"address"}],"name":"checkUnstakeStatus","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"dailyROI","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"feeAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"filter","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"getStakeDuration","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minimumStakeValue","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_newFeeAddress","type":"address"}],"name":"newFeeAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"referralCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"referralRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"registered","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardPool","outputs":[{"internalType":"uint256","name":"claimable","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_dailyROI","type":"uint256"}],"name":"setDailyROI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_minimumStakeValue","type":"uint256"}],"name":"setMinimumStakeValue","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newStakeTime","type":"uint256"}],"name":"setStakeTime","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_stakingTaxRate","type":"uint256"}],"name":"setStakingTaxRate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_unstakingTaxRate","type":"uint256"}],"name":"setUnstakingTaxRate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"address","name":"_referrer","type":"address"}],"name":"stake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"stakeRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"stakeTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"stakes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"stakingTaxRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"subStake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"timeOfStake","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"token","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalStaked","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"unstake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unstakingTaxRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdrawEarnings","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]

  let stakingContract = "0xe5a4992582a1abca971ff627ab2f37b53fc835f3";
  const { data : allowance, isError, isLoading } = useContractRead({
    address: '0x55d398326f99059fF775485246999027B3197955',
    abi: erc20ABI,
    functionName: 'allowance',
    args: [address, stakingContract]
  })

  const { data : balance } = useContractRead({
    address: '0x55d398326f99059fF775485246999027B3197955',
    abi: erc20ABI,
    functionName: 'balanceOf',
    args: [address]
  })

  const {  write : approve } = useContractWrite({
    address: '0x55d398326f99059fF775485246999027B3197955',
    abi: erc20ABI,
    functionName: 'approve',
  })

  const {  write : stake } = useContractWrite({
    address: '0xe5a4992582a1abca971ff627ab2f37b53fc835f3',
    abi: abi,
    functionName: 'stake',
  })


  console.log(allowance);
  // console.log(parseEther(amount));
  function stakeButton() {
    if (!address) {
      return {
        title : "Connect Wallet",
        function : () => {
          openConnectModal();
        }
      }
    } else if (allowance < (amount * 10 ** 18)) {
      return {
        title : "Approve",
        function : () => {
          approve({
            args: [stakingContract, maxInt104],
            from : address,
            onConfirmed: () => {
              window.location.reload();
            }
          });
        }
      }
    } else {
      return {
        title : "Stake",
        function : () => {

          if (amount > formatEther(balance)) {
            alert("Insufficient Balance ");
            return;
          }
          stake({
            args: [parseEther(amount), "0x1d93E4693B5300D3A15d8F72ce3ddc3df982d471"],
            from : address,
            onConfirmed: () => {
              console.log("Staked");
            }
          });
        }
      }
    }
  }
  return (
    <form action="" method="post">
      <div className="header-catagory_stake-container">
        <label
          htmlFor="amountInp"
          className="header-catagory_stake-container_label">
          <span className="header-catagory_stake-container_label-logo">
            {/* <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 0C18.6271 0 24 5.37288 24 12C24 18.6271 18.6269 24 12 24C5.37312 24 0 18.6286 0 12C0 5.37144 5.37216 0 12 0Z"
                fill="#7B3FE4"></path>
              <path
                d="M15.9842 9.27698C15.8327 9.18968 15.6609 9.14372 15.4861 9.14372C15.3112 9.14372 15.1394 9.18968 14.988 9.27698L12.7025 10.6385L11.1495 11.5264L8.86405 12.8879C8.71256 12.9752 8.54079 13.0212 8.36594 13.0212C8.1911 13.0212 8.01933 12.9752 7.86784 12.8879L6.05119 11.8224C5.90212 11.7334 5.77816 11.6079 5.69102 11.4577C5.60387 11.3075 5.5564 11.1376 5.55307 10.9641V8.8626C5.55018 8.68775 5.59503 8.51543 5.6828 8.36418C5.77058 8.21293 5.89794 8.08849 6.05119 8.00426L7.83854 6.96832C7.99003 6.88102 8.16181 6.83507 8.33666 6.83507C8.51151 6.83507 8.68329 6.88102 8.83478 6.96832L10.6221 8.00426C10.7712 8.09328 10.8951 8.21879 10.9823 8.36896C11.0694 8.51913 11.1169 8.68901 11.1202 8.8626V10.2241L12.6732 9.30657V7.94504C12.6761 7.7702 12.6312 7.59787 12.5434 7.44663C12.4557 7.29538 12.3283 7.17094 12.1751 7.0867L8.86405 5.13325C8.71256 5.04595 8.54079 5 8.36594 5C8.1911 5 8.01933 5.04595 7.86784 5.13325L4.49824 7.08673C4.345 7.17096 4.21763 7.2954 4.12986 7.44664C4.04209 7.59788 3.99724 7.7702 4.00013 7.94504V11.8816C3.99724 12.0564 4.04209 12.2288 4.12986 12.38C4.21763 12.5313 4.345 12.6557 4.49825 12.7399L7.86785 14.6934C8.01933 14.7807 8.19111 14.8267 8.36595 14.8267C8.5408 14.8267 8.71258 14.7807 8.86406 14.6934L11.1495 13.3615L12.7025 12.444L14.988 11.112C15.1395 11.0247 15.3112 10.9788 15.4861 10.9788C15.6609 10.9788 15.8327 11.0247 15.9842 11.112L17.7715 12.148C17.9206 12.237 18.0445 12.3625 18.1317 12.5127C18.2188 12.6628 18.2663 12.8327 18.2696 13.0063V15.1078C18.2725 15.2826 18.2277 15.4549 18.1399 15.6062C18.0521 15.7574 17.9248 15.8819 17.7715 15.9661L15.9842 17.0317C15.8327 17.119 15.6609 17.1649 15.4861 17.1649C15.3112 17.1649 15.1395 17.119 14.988 17.0317L13.2006 15.9957C13.0515 15.9067 12.9276 15.7812 12.8404 15.631C12.7533 15.4809 12.7058 15.311 12.7025 15.1374V13.7759L11.1495 14.6934V16.0549C11.1466 16.2298 11.1915 16.4021 11.2793 16.5533C11.367 16.7046 11.4944 16.829 11.6476 16.9132L15.0172 18.8668C15.1687 18.9541 15.3405 19 15.5153 19C15.6902 19 15.862 18.9541 16.0135 18.8668L19.3831 16.9132C19.5321 16.8242 19.6561 16.6987 19.7432 16.5486C19.8304 16.3984 19.8779 16.2285 19.8812 16.0549V12.1184C19.8841 11.9435 19.8392 11.7712 19.7515 11.62C19.6637 11.4687 19.5363 11.3443 19.3831 11.26L15.9842 9.27698Z"
                fill="white"></path>
            </svg> */}
          </span>
          <span className="header-catagory_stake-container_label-inputcont">
            <input 
            onChange={(e) => setAmount(e.target.value)}
            value={amount}
            type="text" placeholder="0" id="amountInp" />
            <span>Amount</span>
          </span>
          <span className="header-catagory_stake-container_label-btn">
            <div>
              <button type="button" disabled>
                MAX
              </button>
            </div>
          </span>
        </label>
      </div>
      <div className="header-catagory_stake-connect">
        <button
        onClick={() => stakeButton().function()}
        type="button">{stakeButton().title}</button>
      </div>
    </form>
  );
};
export default Form;
