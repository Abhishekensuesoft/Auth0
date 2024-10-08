import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button
      className="btn fw-semibold btn-dark d-flex align-items-center gap-2 text-capitalize mx-auto rounded-2 justify-content-center px-4"
      onClick={() =>
        logout({ logoutParams: { returnTo: window.location.origin } })
      }
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
            stroke-dasharray="48"
            stroke-dashoffset="48"
            d="M16 5v-1c0 -0.55 -0.45 -1 -1 -1h-9c-0.55 0 -1 0.45 -1 1v16c0 0.55 0.45 1 1 1h9c0.55 0 1 -0.45 1 -1v-1"
          >
            <animate
              fill="freeze"
              attributeName="stroke-dashoffset"
              dur="0.6s"
              values="48;0"
            />
          </path>
          <path stroke-dasharray="12" stroke-dashoffset="12" d="M10 12h11">
            <animate
              fill="freeze"
              attributeName="stroke-dashoffset"
              begin="0.7s"
              dur="0.2s"
              values="12;0"
            />
          </path>
          <path
            stroke-dasharray="6"
            stroke-dashoffset="6"
            d="M21 12l-3.5 -3.5M21 12l-3.5 3.5"
          >
            <animate
              fill="freeze"
              attributeName="stroke-dashoffset"
              begin="0.9s"
              dur="0.2s"
              values="6;0"
            />
          </path>
        </g>
      </svg>
      Log Out
    </button>
  );
};

export default LogoutButton;
