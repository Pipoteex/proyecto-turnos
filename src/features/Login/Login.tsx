const Login = () => {
  return (
    <div className=" relative w-[100vw] h-[100vh] ">
      <section className="relative w-[100%] h-[100%]">
        <div>
          <h2>Iniciar Sesion</h2>
          <div>
            <div>
              <span>USUARIO</span>
              <input type="text" placeholder="ingrese su Usuario" />
            </div>
            <div>
              <span>CONTRASEÑA</span>
              <input type="text" placeholder="ingrese su Contraseña" />
            </div>
            <button>Ingresar</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
