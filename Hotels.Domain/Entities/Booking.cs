namespace Hotels.Domain.Entities;

public class Booking : BaseEntity
{
    public int HotelId { get; set; }
    public int DaysAmount { get; set; }
    public bool IncludesBreakfast { get; set; }
    public string Type { get; set; }
    public decimal Rate { get; set; }
}
