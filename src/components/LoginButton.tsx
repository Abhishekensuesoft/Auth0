import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <>
      <button
        className="btn fw-semibold btn-dark d-flex align-items-center gap-2 text-capitalize mx-auto rounded-2 justify-content-center px-4"
        onClick={() => loginWithRedirect()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <g
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          >
            <path
              stroke-dasharray="36"
              stroke-dashoffset="36"
              d="M13 4l7 0c0.55 0 1 0.45 1 1v14c0 0.55 -0.45 1 -1 1h-7"
            >
              <animate
                fill="freeze"
                attributeName="stroke-dashoffset"
                dur="0.5s"
                values="36;0"
              />
            </path>
            <path stroke-dasharray="14" stroke-dashoffset="14" d="M3 12h11.5">
              <animate
                fill="freeze"
                attributeName="stroke-dashoffset"
                begin="0.6s"
                dur="0.2s"
                values="14;0"
              />
            </path>
            <path
              stroke-dasharray="6"
              stroke-dashoffset="6"
              d="M14.5 12l-3.5 -3.5M14.5 12l-3.5 3.5"
            >
              <animate
                fill="freeze"
                attributeName="stroke-dashoffset"
                begin="0.8s"
                dur="0.2s"
                values="6;0"
              />
            </path>
          </g>
        </svg>
        Log In
      </button>
    </>
  );
};

export default LoginButton;
