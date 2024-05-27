namespace Hotels.Domain.Entities;

public class Hotel : BaseEntity
{
    public string Name { get; set; }
    public string Location { get; set; }
    public string PictureUrl { get; set; }
}
