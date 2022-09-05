export default function TransInfoCard(props){
    return (
      <div className="sourceSans TransInfoDimensions mt-6 py-2 divide-y divide-dashed divide-amber-300 shadow-md rounded-lg">
        <div className="text-center mb-4">
          <p className="leading-5 text-gray-400">{props.message}</p>
          <p className="leading-9 text-3xl font-semibold py-2 orangeTxt">
            Br {props.amount}
          </p>
        </div>
        <div className="flex flex-row justify-between px-4 pt-4">
          <div className="flex flex-col">
            <span className="text-sm text-slate-400 mb-0.5">{props.to}</span>
            <span className="orangeTxt">{props.accountPhone}</span>
          </div>

          <div className="flex flex-col">
            <span className="text-sm text-slate-400 mb-0.5">{props.name}</span>
            <span className="orangeTxt">{props.accountName}</span>
          </div>
        </div>
      </div>
    );

}