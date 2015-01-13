class User < ActiveRecord::Base
  include BCrypt
  has_many :hangmen
  has_many :words, through: :hangmen
  
  validates_presence_of :username

  validates_uniqueness_of :username

  validates :password, presence: true, length: { minimum: 3, message: "Your password must be greater than 3 characters." }

  def password
    @password ||= Password.new(self.password_hash)
  end
  def password=(new_password)
    @password = Password.create(new_password)
    self.password_hash = @password
  end
end