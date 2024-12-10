const ActorListItem = ({ actor }) => {
    const actorImage = actor.ProfilePic ? actor.ProfilePic : '/icon.svg';

    return (
        <div className="flex flex-col items-center space-y-2">
            <img 
                src={actorImage} 
                alt={actor.Name} 
                className="w-24 h-24 rounded-full object-cover" 
            />
            <p className="text-lg font-semibold text-center h-12 overflow-hidden">{actor.Name}</p>
        </div>
    );
};

export default ActorListItem;
