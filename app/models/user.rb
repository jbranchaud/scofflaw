class User < ActiveRecord::Base
  devise :database_authenticatable, :registerable, :recoverable

  validates_uniqueness_of :email
  validates_presence_of :email, :password
  validates :password, confirmation: true
end
