function Process({ number, title, description }) {
  return (
    <div className="process">
      <div className="processLabel">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="64"
          viewBox="0 0 64 64"
          fill="none"
        >
          <circle cx="32" cy="32" r="32" fill="#1E1E1E" />
          <text
            x="50%"
            y="58%"
            text-anchor="middle"
            dominant-baseline="middle"
            font-family="Urbanist, sans-serif"
            font-size="47"
            fill="white"
            line-height="42.63px"
          >
            {number}
          </text>
        </svg>

        <div className="processTitle">{title}</div>
      </div>
      <div className="processDescription">{description}</div>
    </div>
  );
}

export default Process;
