// import "./orders-styles.css"

export default function OrdersOverview() {
  const orders = [
    {
      id: 1,
      icon: "💧",
      iconColor: "#3B82F6",
      title: "$2400, Design changes",
      timestamp: "22 DEC 7:20 PM",
    },
    {
      id: 2,
      icon: "⬜",
      iconColor: "#EF4444",
      title: "New order #4219423",
      timestamp: "21 DEC 11:21 PM",
    },
    {
      id: 3,
      icon: "🛒",
      iconColor: "#3B82F6",
      title: "Server Payments for April",
      timestamp: "21 DEC 9:28 PM",
    },
    {
      id: 4,
      icon: "💳",
      iconColor: "#F59E0B",
      title: "New card added for order #3210145",
      timestamp: "20 DEC 3:52 PM",
    },
    {
      id: 5,
      icon: "📦",
      iconColor: "#6B7280",
      title: "Unlock packages for Development",
      timestamp: "19 DEC 11:35 PM",
    },
    {
      id: 6,
      icon: "Xd",
      iconColor: "#EF4444",
      title: "New order #9851258",
      timestamp: "18 DEC 4:41 PM",
    },
  ]

  return (
    <div className="container">
      <div className="col-4">
        <div className="orders-card">
          {/* Header */}
          <div className="row header-section">
            <div className="col-12">
              <h3 className="orders-title">Orders overview</h3>
              <div className="growth-indicator">
                <span className="growth-icon">✓</span>
                <span className="growth-text">+30% this month</span>
              </div>
            </div>
          </div>

          {/* Orders List */}
          <div className="orders-list">
            {orders.map((order) => (
              <div key={order.id} className="row order-item">
                <div className="col-3">
                  <div className="icon-container">
                    <span className="order-icon" style={{ backgroundColor: order.iconColor }}>
                      {order.icon}
                    </span>
                  </div>
                </div>
                <div className="col-9">
                  <div className="order-content">
                    <h6 className="order-title">{order.title}</h6>
                    <p className="order-timestamp">{order.timestamp}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
