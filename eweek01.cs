public class NameAndFullName {
    public string Name {get;set;}
    public string LastName {get;set;}
    public string FullName { 
        get { return this.Name + " " +this.LastName}
        set { 
            if(value.IndexOf(" ")!= -1) {
                this.Name = value.Split(" ")[0];
                this.LastName = value.Split(" ")[1];   
            }
        }
    }  
}