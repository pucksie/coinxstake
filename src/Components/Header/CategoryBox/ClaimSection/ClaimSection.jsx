import React from "react";
import "./ClaimSection.css";
import { useConnectModal } from "@rainbow-me/rainbowkit";
import { useContractRead } from 'wagmi'
import { erc20ABI } from "wagmi";
import { formatEther, maxInt104, parseEther } from "viem";
import { useContractWrite } from 'wagmi'
import { useAccount } from "wagmi";
const ClaimSection = () => {
        let abi = [{"inputs":[{"internalType":"address","name":"_token","type":"address"},{"internalType":"address","name":"_feeAddress","type":"address"},{"internalType":"uint256","name":"_stakingTaxRate","type":"uint256"},{"internalType":"uint256","name":"_unstakingTaxRate","type":"uint256"},{"internalType":"uint256","name":"_dailyROI","type":"uint256"},{"internalType":"uint256","name":"_stakeTime","type":"uint256"},{"internalType":"uint256","name":"_minimumStakeValue","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"stakeholder","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"totalTax","type":"uint256"},{"indexed":false,"internalType":"address","name":"_referrer","type":"address"}],"name":"OnRegisterAndStake","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"tax","type":"uint256"}],"name":"OnStake","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"tax","type":"uint256"}],"name":"OnUnstake","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"OnWithdrawal","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_from","type":"address"},{"indexed":true,"internalType":"address","name":"_to","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[],"name":"active","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"addStake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_stakeholder","type":"address"}],"name":"calculateEarnings","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"changeActiveStatus","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_unstaker","type":"address"}],"name":"checkUnstakeStatus","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"dailyROI","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"feeAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"filter","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"getStakeDuration","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minimumStakeValue","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_newFeeAddress","type":"address"}],"name":"newFeeAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"referralCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"referralRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"registered","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardPool","outputs":[{"internalType":"uint256","name":"claimable","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_dailyROI","type":"uint256"}],"name":"setDailyROI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_minimumStakeValue","type":"uint256"}],"name":"setMinimumStakeValue","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newStakeTime","type":"uint256"}],"name":"setStakeTime","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_stakingTaxRate","type":"uint256"}],"name":"setStakingTaxRate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_unstakingTaxRate","type":"uint256"}],"name":"setUnstakingTaxRate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"address","name":"_referrer","type":"address"}],"name":"stake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"stakeRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"stakeTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"stakes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"stakingTaxRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"subStake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"timeOfStake","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"token","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalStaked","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"unstake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unstakingTaxRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdrawEarnings","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]

  const { address } = useAccount();
  const { openConnectModal } = useConnectModal();
  const { data : stakeBalance } = useContractRead({
    address: '0xe5a4992582a1abca971ff627ab2f37b53fc835f3',
    abi: abi,
    functionName: 'stakes',
    args: [address]
  })

  const { data : earnings } = useContractRead({
    address: '0xe5a4992582a1abca971ff627ab2f37b53fc835f3',
    abi: abi,
    functionName: 'calculateEarnings',
    args: [address]
  })

  const { write : claim } = useContractWrite({
    address: '0xe5a4992582a1abca971ff627ab2f37b53fc835f3',
    abi: abi,
    functionName: 'withdrawEarnings',
  })

  function claimButton() {
    if (!address) {
      return {
        title : 'Connect Wallet',
        onClick : openConnectModal
      }
    } else {
      return {
        title : 'Claim',
        onClick : () => {
          
        }
      }
    }
  }

  

  return (
    <div className="claim">
      <p>
        You will be able to claim your rewards after the withdraw request has
        been processed. To unstake your amount go to <span>Unstake</span> tab
      </p>
      <div className="claim_card">
        <div className="claim_card-stat">
          <div className="claim_card-stat__balance">
            <div>Total claimable rewards</div>
            <div className="claim_card-stat__balance-value">
              <span>{earnings? formatEther(earnings) : 0}&nbsp;USDT</span>
            </div>
          </div>
          <div className="claim_card-stat__balance">
            <div>Total Staked</div>
            <div className="claim_card-stat__balance-value">
              <span>{stakeBalance ? formatEther(stakeBalance) : 0}&nbsp;USDT</span>
            </div>
          </div>
        </div>
        {/* <div className="claim_card-edit">Edit reward claims</div> */}
      </div>
      <div className="lido-btn-wrapper">
        <button
        onClick={() => {
          if (earnings == 0) {
            alert('No rewards to claim')
            return
          }
          claim({

            from : address,
            // erro

          })
        }}
        type="button">{claimButton().title}</button>
      </div>
    </div>
  );
};

export default ClaimSection;
