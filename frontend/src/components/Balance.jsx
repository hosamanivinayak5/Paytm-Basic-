export function BalanceComponent({amount})
{
    return <div className="flex p-2">
     <div className="font-bold  text-lg">Your balance is</div>   
     <div className="font-semibold ml-4 text-lg">₹{amount}</div>
     
    </div>
}