import { useLocation } from "react-router-dom"

export default function DestComp() {
  const loc = useLocation();
  const id = loc.state.id;
  const job = loc.state.job;
  return (
    <div>
      <h3>이동한 컴포넌트</h3>
      id:{id}<br />
      job:{job}
    </div>
  )
}