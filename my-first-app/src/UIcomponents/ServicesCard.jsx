export default function ServicesCard({children, imgSource, cardTitle, cardBody, cardSubtitle}) {
  return (
      <>
      <picture className="servicesCardFrame">
        <img src={imgSource}></img>
      </picture>
      <article className="servicesCardText">
        <h4 className="servicesCardTitle">{cardTitle}</h4>
        <p className="servicesCardBody">
          {cardBody}
        </p>
        <h5 className="servicesCardSubtitle">{cardSubtitle}</h5>
        <footer className="servicesCardIcons">
          {children}
        </footer>
      </article>
      </>
  );
}
