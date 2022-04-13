export default function IconCentered({iconSource, iconName}) {
    return(
        <div className="ToCenter">
            <svg width="3em" height="3em">           
                <image href={iconSource} width="3em" height="3em"/>
            </svg>
            <p className="servicesCardIconsName">{iconName}</p>
        </div>
    )
}