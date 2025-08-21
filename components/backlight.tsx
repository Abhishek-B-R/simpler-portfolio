export default function Backlight() {
    return (
        <div
        aria-hidden
        className="absolute inset-0 z-10 pointer-events-none w-screen"
        style={{}}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "55%",
            height: "55%",
            background:
              "radial-gradient(circle at 0% 0%, rgba(6,182,212,0.12), transparent 30%)",
            filter: "blur(48px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "45%",
            height: "50%",
            background:
              "radial-gradient(circle at 100% 0%, rgba(14,165,233,0.09), transparent 30%)",
            filter: "blur(56px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "45%",
            height: "50%",
            background:
              "radial-gradient(circle at 0% 100%, rgba(34,211,238,0.07), transparent 30%)",
            filter: "blur(42px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 0,
            right: 0,
            width: "55%",
            height: "55%",
            background:
              "radial-gradient(circle at 100% 100%, rgba(56,189,248,0.06), transparent 30%)",
            filter: "blur(64px)",
          }}
        />
      </div>
    )
};
