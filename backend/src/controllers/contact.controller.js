import { pool, isFallbackMode, mockMessages } from '../config/db.js';

export const submitContactForm = async (req, res) => {
  const { name, email, phone, message } = req.body;

  // Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: 'Name, email, and message fields are required.'
    });
  }

  try {
    if (isFallbackMode) {
      const newMessage = {
        id: mockMessages.length + 1,
        name,
        email,
        phone: phone || null,
        message,
        created_at: new Date()
      };
      mockMessages.push(newMessage);
      
      console.log('\n📬 NEW INCOMING CONTACT MESSAGE RECEIVED (MOCK DB ROUTE):');
      console.log('----------------------------------------------------');
      console.log(`From   : ${name} (${email})`);
      if (phone) console.log(`Phone  : ${phone}`);
      console.log(`Message: ${message}`);
      console.log('----------------------------------------------------\n');

      return res.status(201).json({
        success: true,
        source: 'fallback-mock-db',
        message: 'Message received and printed to server console (fallback database mode).'
      });
    }

    // Insert to MySQL
    const query = 'INSERT INTO messages (name, email, phone, message) VALUES (?, ?, ?, ?)';
    await pool.query(query, [name, email, phone || null, message]);

    console.log(`📬 Message saved to database from ${name} (${email})`);

    res.status(201).json({
      success: true,
      source: 'mysql-db',
      message: 'Thank you! Your message has been saved to the database.'
    });
  } catch (error) {
    console.error('Error inserting message into MySQL:', error);
    res.status(500).json({
      success: false,
      message: 'An error occurred while saving your message. Please try again.'
    });
  }
};
