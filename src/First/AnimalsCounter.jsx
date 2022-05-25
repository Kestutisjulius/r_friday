function AnimalsCounter({animals}){
    const randomHsl = () => `hsla(${Math.random() * 360}, 100%, 50%, 1)`;

    return(
        <>
            {
                animals.map(s => <div key={s.id} style={{backgroundColor : randomHsl()}}>{s.animal}: <img className={"img"} src={s.img} alt={s.animal}/></div>)
            }
        </>

    )
}

  export default AnimalsCounter;