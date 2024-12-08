
export function CustomWish({ name }) {
    const currentDate = new Date().toLocaleDateString('en-GB', {
      weekday: "long",
      day: '2-digit',
      month: 'long'
    }); // You can customize the format if needed.
  
    return <div className="mb-6">
      <p className="text-lg ">{currentDate}</p>
      <h1 className="text-3xl font-bold"> Good Morning, {name} 👋</h1>
    </div>
  }