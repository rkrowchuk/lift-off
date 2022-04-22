class Api::UsersController < ApplicationController
  
  def index
    @users = User.all
       if @users
          render json: {
          users: @users
       }
      else
          render json: {
          status: 500,
          errors: ['no users found']
      }
     end
end

def show
  @user = User.find(params[:id])
      if @user
         render json: {
         user: @user
      }
      else
         render json: {
         status: 500,
         errors: ['user not found']
       }
      end
 end
  
  def create
    puts "user params", params
    @user = User.new(user_params)
    if @user.save
      session[:user_id] = @user  
      # login!
      render json: {
        logged_in: true,
        status: :created,
        user: @user
      }
    else
      render json: { 
        # status: 401,
        # errors: ['error creating user']
        status: 500,
        errors: @user.errors.full_messages
      }
    end
  end

  def update 
    # puts "user level", params 
    # @user = User.find_by(session[:user_id])
    # @user.update(level: params)
    # render json: {
      # status: ['user update to level one'],
      # level: @level
  # }
  puts "session user id", session[:user_id]
  puts "user_id", :user_id 
  puts "params", params
  @user = User.find_by(session[:user_id])
  # if @user.update(params.require(:level).permit(:level))
  if @user.update!(level:'1')
    flash[:success] = "user level is successfully updated"
    render json: {
      level: @level
    } 
  else 
    flash.now[:error] = "fail to update user level"
  end 
end 

  User.update()
      

  private

  def user_params
    params.require(:formValue).permit(:name, :email, :parent_email, :password, :password_confirmation)
  end

  # private 
  # def level_params
    # params.require(:level).permit(:level)
  # end 
end
