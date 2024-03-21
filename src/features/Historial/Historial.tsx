function Historial() {
  return (
    <div className="w-[100%] h-[100%] flex items-center justify-center flex-col p-[1%] ">
      <h1 className="w-[100%] h-[10%] py-[1%] flex items-center justify-center font-semibold text-[22px] ">
        Historico
      </h1>
      <section className="w-[100%] h-[100%] flex items-center justify-start flex-col border-[1px] border-[solid] border-[#DEE1E6] ">
        <div className="w-[100%] h-[100%] flex items-start justify-between  ">
          <label className="w-[100%] flex items-center justify-start flex-col text-[14px] font-semibold">
            <span className=" h-[3rem] w-[100%] flex items-center justify-center bg-[#DEE1E6] border-b-[1px] border-[solid] border-[#c8ccd3] ">
              DNI
            </span>
            {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((_, i) => (
              <span
                key={i}
                className="h-[3rem] w-[100%] flex items-center justify-center text-[#379AE6]"
              >
                42614936
              </span>
            ))}
          </label>
          <label className="w-[100%] flex items-center justify-center flex-col text-[14px] font-semibold  ">
            <span className="h-[3rem] w-[100%] flex items-center justify-center bg-[#DEE1E6] border-b-[1px] border-[solid] border-[#c8ccd3] ">
              Nombre
            </span>
            {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((_, i) => (
              <span
                key={i}
                className="h-[3rem] w-[100%] flex items-center justify-center"
              >
                Fabrizio
              </span>
            ))}
          </label>
          <label className=" w-[100%]  flex items-center justify-center flex-col text-[14px] font-semibold ">
            <span className=" h-[3rem] w-[100%] flex items-center justify-center bg-[#DEE1E6] border-b-[1px] border-[solid] border-[#c8ccd3]">
              Apellido
            </span>
            {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((_, i) => (
              <span
                key={i}
                className="h-[3rem] w-[100%] flex items-center justify-center"
              >
                Martinez
              </span>
            ))}
          </label>
          <label className="w-[100%]  flex items-center justify-center flex-col text-[14px] font-semibold ">
            <span className=" h-[3rem] w-[100%] flex items-center justify-center bg-[#DEE1E6] border-b-[1px] border-[solid] border-[#c8ccd3] ">
              Email
            </span>
            {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((_, i) => (
              <span
                key={i}
                className="h-[3rem] w-[100%] flex items-center justify-center text-[#379AE6] underline"
              >
                FabriAdrian2000@gmail.com
              </span>
            ))}
          </label>{" "}
          <label className="w-[100%]  flex items-center justify-center flex-col text-[14px] font-semibold ">
            <span className=" h-[3rem] w-[100%] flex items-center justify-center bg-[#DEE1E6] border-b-[1px] border-[solid] border-[#c8ccd3] ">
              Telefono
            </span>
            {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((_, i) => (
              <span
                key={i}
                className="h-[3rem] w-[100%] flex items-center justify-center"
              >
                3764839728
              </span>
            ))}
          </label>
          <label className="w-[100%]  flex items-center justify-center flex-col text-[14px] font-semibold ">
            <span className=" h-[3rem] w-[100%] flex items-center justify-center bg-[#DEE1E6] border-b-[1px] border-[solid] border-[#c8ccd3] ">
              Observaciones
            </span>
            {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((_, i) => (
              <span
                key={i}
                className="h-[3rem] w-[100%] flex items-center justify-center text-center"
              >
                Faltan Documentos
              </span>
            ))}
          </label>
          <label className="w-[100%] flex items-center justify-center flex-col text-[14px] font-semibold ">
            <span className=" h-[3rem] w-[100%] flex items-center justify-center bg-[#DEE1E6] border-b-[1px] border-[solid] border-[#c8ccd3]">
              Estado
            </span>
            {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((_, i) => (
              <span
                key={i}
                className="h-[3rem] w-[100%] flex items-center justify-center"
              >
                Cancelado
              </span>
            ))}
          </label>
          <label className="w-[100%]  flex items-center justify-center flex-col text-[14px] font-semibold ">
            <span className="  h-[3rem] w-[100%] flex items-center justify-center bg-[#DEE1E6] border-b-[1px] border-[solid] border-[#c8ccd3]">
              Tramites
            </span>
            {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((_, i) => (
              <span
                key={i}
                className="h-[3rem] w-[100%] flex items-center justify-center"
              >
                Ingresos Brutos
              </span>
            ))}
          </label>
          <label className="w-[100%]  flex items-center justify-center flex-col text-[14px] font-semibold ">
            <span className=" h-[3rem] w-[100%] flex items-center justify-center bg-[#DEE1E6] border-b-[1px] border-[solid] border-[#c8ccd3]">
              Fechas
            </span>
            {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((_, i) => (
              <span
                key={i}
                className="h-[3rem] w-[100%] flex items-center justify-center"
              >
                HH DD YYY
              </span>
            ))}
          </label>
        </div>
      </section>
    </div>
  );
}

export default Historial;
