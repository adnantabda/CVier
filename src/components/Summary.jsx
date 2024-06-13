import { useState } from "react";

export function useSummaryManage() {
  let data =
    "Seasoned Senior Software Engineer with over 10 years of experience in designing, developing, and maintaining software applications. Proficient in various programming languages including Python, and JavaScript.";
  const [summary, setSummary] = useState(data);

  function handleSummary(e) {
    setSummary(e.target.value);
  }
  function resetSummary() {
    setSummary(data);
  }

  function handleDelete(e){
    setSummary('')
  }

  return {
    summary,
    handleSummary,
    resetSummary,
    handleDelete,
  };
}

export function EditSummary({ handleSummary, resetSummary, handleDelete }) {
  return (
    <div className="input-summary common-flex">
        <label>Summary</label>
      <input type="text" onChange={handleSummary} />
      <div>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={resetSummary}>Reset</button>
      </div>
    </div>
  );
}

export function Summary({ summary }) {
  return (
    <div>
      <p>{summary}</p>
    </div>
  );
}
